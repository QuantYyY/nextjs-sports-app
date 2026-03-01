import { FC } from "react";

import "./global.scss";

const RootLayout: FC<LayoutProps<"/">> = ({ children }) => {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
