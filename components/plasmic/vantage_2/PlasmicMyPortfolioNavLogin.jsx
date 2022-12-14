// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4873twxeH88i7MYXjYktuR
// Component: FjEMMKSOtb
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_vantage_2.module.css"; // plasmic-import: 4873twxeH88i7MYXjYktuR/projectcss
import sty from "./PlasmicMyPortfolioNavLogin.module.css"; // plasmic-import: FjEMMKSOtb/css

export const PlasmicMyPortfolioNavLogin__VariantProps = new Array();

export const PlasmicMyPortfolioNavLogin__ArgProps = new Array();

function PlasmicMyPortfolioNavLogin__RenderFunc(props) {
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"MY PORTFOLIO"}
        </div>

        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          platform={"nextjs"}
        >
          {"LOGIN"}
        </p.PlasmicLink>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text", "link"],
  freeBox: ["freeBox", "text", "link"],
  text: ["text"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMyPortfolioNavLogin__ArgProps,
          internalVariantPropNames: PlasmicMyPortfolioNavLogin__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicMyPortfolioNavLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMyPortfolioNavLogin";
  } else {
    func.displayName = `PlasmicMyPortfolioNavLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicMyPortfolioNavLogin = Object.assign(
  // Top-level PlasmicMyPortfolioNavLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicMyPortfolioNavLogin
    internalVariantProps: PlasmicMyPortfolioNavLogin__VariantProps,
    internalArgProps: PlasmicMyPortfolioNavLogin__ArgProps
  }
);

export default PlasmicMyPortfolioNavLogin;
/* prettier-ignore-end */
