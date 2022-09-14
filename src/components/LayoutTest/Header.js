/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import styles from './styles.module.css';
import LayoutProvider from '@theme/Layout/Provider';

export default function Header({ children }) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <div className={styles.docsWrapper}>
      <div className="bg-red-600 px-3 py-5">Header</div>
      {/* <BackToTopButton /> */}

      <div className="main flex ">
        <LayoutProvider>
          <DocPageLayoutSidebar sidebar={sidebar.items} />
        </LayoutProvider>
        <div className={styles.docPage}>{children}</div>
      </div>
      <div className="bg-red-600">Footer</div>
    </div>
  );
}
