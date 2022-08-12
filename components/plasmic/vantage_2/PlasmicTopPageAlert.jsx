// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4873twxeH88i7MYXjYktuR
// Component: nHD9Ae7fUs
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_vantage_2.module.css"; // plasmic-import: 4873twxeH88i7MYXjYktuR/projectcss
import sty from "./PlasmicTopPageAlert.module.css"; // plasmic-import: nHD9Ae7fUs/css

export const PlasmicTopPageAlert__VariantProps = new Array();

export const PlasmicTopPageAlert__ArgProps = new Array();

function PlasmicTopPageAlert__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {
          "UPDATE: Vaccinations against COVID-19 are REQUIRED for all Travelers and Vantage associates (ship crew, Expedition Team, Cruise Directors, Program Managers, etc.), and many countries ARE NOW requiring booster vaccinations for entry. For additional information, click here or visit our Safe Travels Initiative page."
        }
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTopPageAlert__ArgProps,
          internalVariantPropNames: PlasmicTopPageAlert__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicTopPageAlert__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopPageAlert";
  } else {
    func.displayName = `PlasmicTopPageAlert.${nodeName}`;
  }
  return func;
}

export const PlasmicTopPageAlert = Object.assign(
  // Top-level PlasmicTopPageAlert renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicTopPageAlert
    internalVariantProps: PlasmicTopPageAlert__VariantProps,
    internalArgProps: PlasmicTopPageAlert__ArgProps
  }
);

export default PlasmicTopPageAlert;
/* prettier-ignore-end */