import domElementToReact from "dom-element-to-react";
import * as ReactDOM from "react-dom";

import IOptions from "./IOptions";
import IRehydrator from "./IRehydrator";

const rehydratableToReactElement = async (
  el: Element,
  rehydrators: IRehydrator,
  options: IOptions
): Promise<React.ReactElement<any>> => {
  const rehydratorName = el.getAttribute("data-rehydratable");

  if (!rehydratorName) {
    throw new Error("Rehydrator name is missing from element.");
  }

  const rehydrator = rehydrators[rehydratorName];

  if (!rehydrator) {
    throw new Error(`No rehydrator found for type ${rehydratorName}`);
  }

  return rehydrator(
    el,
    children => rehydrateChildren(children, rehydrators, options),
    options.extra
  );
};

const createCustomHandler = (
  rehydrators: IRehydrator,
  options: IOptions
) => async (node: Node) => {
  // This function will run on _every_ node that domElementToReact encounters.
  // Make sure to keep the conditional highly performant.
  if (
    node.nodeType === Node.ELEMENT_NODE &&
    (node as Element).hasAttribute("data-rehydratable")
  ) {
    return rehydratableToReactElement(node as Element, rehydrators, options);
  }

  return false;
};

const rehydrateChildren = (
  el: Node,
  rehydrators: IRehydrator,
  options: IOptions
) => domElementToReact(el, createCustomHandler(rehydrators, options));

const render = ({
  rehydrated,
  root
}: {
  rehydrated?: React.ReactNode;
  root?: Element;
}) => {
  if (!rehydrated || !root) {
    return;
  }

  // Unmount; it's possible that this was rehydrated previously.
  ReactDOM.unmountComponentAtNode(root);

  ReactDOM.render(rehydrated as React.ReactElement<any>, root);
};

export default async (
  container: Element,
  rehydrators: IRehydrator,
  options: IOptions
) => {
  const roots = Array.from(
    // TODO: allow setting a container identifier so multiple rehydration instances can exist
    container.querySelectorAll("[data-react-from-markup-container]")
  );

  // TODO: solve race condition when a second rehydrate runs

  const renders = [];

  for (const root of roots) {
    // It's possible that this root was detached by a previous render in this loop
    if (container.contains(root)) {
      renders.push(async () => {
        try {
          const rehydrated = await rehydrateChildren(
            root,
            rehydrators,
            options
          );

          return { root, rehydrated };
        } catch (e) {
          /* tslint:disable-next-line no-console */
          console.error("Rehydration failure", e);
        }

        return {};
      });
    }
  }

  await Promise.all(renders.map(r => r().then(render)));
};

export { IRehydrator, rehydratableToReactElement, rehydrateChildren };
