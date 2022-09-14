import React from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  DocsSidebarProvider,
  DocsVersionProvider,
  useDocRouteMetadata,
} from '@docusaurus/theme-common/internal';
import Header from './Header';

export default function DocPage(props) {
  const { versionMetadata } = props;
  const currentDocRouteMetadata = useDocRouteMetadata(props);

  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  return (
    <>
      <HtmlClassNameProvider
        className={clsx(
          // TODO: it should be removed from here
          ThemeClassNames.wrapper.docsPages,
          ThemeClassNames.page.docsDocPage,
          props.versionMetadata.className,
        )}
      >
        <DocsVersionProvider version={versionMetadata}>
          <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
            <Header>{docElement}</Header>
          </DocsSidebarProvider>
        </DocsVersionProvider>
      </HtmlClassNameProvider>
    </>
  );
}
