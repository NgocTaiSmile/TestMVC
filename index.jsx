import { createRoot } from 'react-dom/client';
import React from 'react';

import Input from './clstdInput';
import FormTemplate from './clptnFillForm';

const bodyContent = (
    <div className='flex flex-col gap-4'>
        <Input id = 'content' label = 'Paste the https link' />
        <Input id = 'title' label = 'write the title' />
    </div>
)

const domNode = document.getElementById("root")
const root = createRoot(domNode);
root.render(<>
<FormTemplate title='Create New Item' actionLabel='Create' body = {bodyContent} />
</>
);
