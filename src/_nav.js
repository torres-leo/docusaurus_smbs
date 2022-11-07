import { CNavGroup, CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Introduction",
    to: "/",
  },
  {
    component: CNavGroup,
    name: "Getting Started",
    to: "/",
    items: [
      {
        component: CNavItem,
        name: "Installation",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Configuration",
        to: "/",
      },
      {
        component: CNavItem,
        name: "TypeScript Support",
        to: "/",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Guides",
    to: "/",
    items: [
      {
        component: CNavItem,
        name: "Pages",
        to: "/",
      },
      {
        component: CNavGroup,
        name: "Docs",
        to: "/",
        items: [
          {
            component: CNavItem,
            name: "Create a doc",
            to: "/",
          },
          {
            component: CNavGroup,
            name: "Sidebar",
            to: "/",
            items: [
              {
                component: CNavItem,
                name: "Sidebar items",
                to: "/",
              },
              {
                component: CNavItem,
                name: "Autogenerated",
                to: "/",
              },
              {
                component: CNavItem,
                name: "Using multiple sidebars",
                to: "/",
              },
            ],
          },
          {
            component: CNavItem,
            name: "Versioning",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Docs Multi-instance",
            to: "/",
          },
        ],
      },
      {
        component: CNavItem,
        name: "Blog",
        to: "/",
      },
      {
        component: CNavGroup,
        name: "Markdown Features ",
        to: "/",
        items:[
          {
            component: CNavItem,
            name: "MDX and React",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Tabs",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Code blocks",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Admonitions",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Headings and Table of contents",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Assets",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Markdown links",
            to: "/",
          },
          {
            component: CNavItem,
            name: "MDX Plugins",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Math Equations",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Head metadata",
            to: "/",
          },
        ]
      },
      {
        component: CNavItem,
        name: "Styling and Layout",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Swizzinlg",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Static Assets",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Search",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Browser Support",
        to: "/",
      },
      {
        component: CNavItem,
        name: "SEO",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Using Plugins",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Deployment",
        to: "/",
      },
      {
        component: CNavGroup,
        name: "Internationalization",
        to: "/",
        items: [
          {
            component: CNavItem,
            name: "Tutorial",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Using Git",
            to: "/",
          },
          {
            component: CNavItem,
            name: "Using Crowdin",
            to: "/",
          },
        ]
      },
      {
        component: CNavItem,
        name: "What's next?",
        to: "/",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Advanced Guides",
    to: "/",
    items: [
      {
        component: CNavItem,
        name: "Architecture",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Plugins",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Routing",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Static site generation",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Client architecture",
        to: "/",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Migration from v1 to v2",
    to: "/",
    items:[
      {
        component: CNavItem,
        name: "Migration overview",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Automated migration",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Versioned sites",
        to: "/",
      },
      {
        component: CNavItem,
        name: "Translated sites",
        to: "/",
      },
    ]
  },
];

export default _nav;