"use client";

import { Link } from "@/components/link/link";

const GlobalError = () => {
  return (
    <html>
      <body>
        <div>
          Произошла ошибка! <br />
          <Link href="/">Вернутся на главную страницу</Link>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
