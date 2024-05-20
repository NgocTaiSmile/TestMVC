import { createRoot } from 'react-dom/client';
import React from 'react';
import NhapGiayKhen from './PgIpListCert';

const domNode = document.getElementById("root")
const root = createRoot(domNode);
root.render(<>
<NhapGiayKhen />
</>
);
