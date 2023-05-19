import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";
function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingBlock: "1rem",
        marginInline: "7.5rem",
        alignItems: "center",
        borderTop: "1px solid  white",
      }}
    >
      <p
        style={{
          marginBottom: "0em",
          fontSize: "0.75rem",
          color: "var(--color-grey-shade-3)",
        }}
      >
        Copyright © 2022 Gamehub Inc. — All Rights Reserved
      </p>
    </footer>
    // <FooterLayout
    //   style={style}
    //   links={links && links.length > 0 && <FooterLinks links={links} />}
    //   logo={logo && <FooterLogo logo={logo} />}
    //   copyright={copyright && <FooterCopyright copyright={copyright} />}
    // />
  );
}
export default React.memo(Footer);
