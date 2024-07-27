npm install react-router-dom localforage match-sorter sort-by
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i firebase
npm install react-icons --save
npm install sweetalert2
npm i react-toastify
npm i react-fast-marquee
npm i @material-tailwind/react
npm i react-responsive-carousel
npm i react-countup

main.jsx =>

import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{
path: "/",
element: <div>Hello world!</div>,
},
]);

<RouterProvider router={router} />

taiwind config =>

content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],

index.css =>

@tailwind base;
@tailwind components;
@tailwind utilities;
