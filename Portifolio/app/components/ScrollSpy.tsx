// "uuse client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const sections = ["about", "home", "skills"];

// const ScrollSpy = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const router = useRouter();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//             router.push(`#${entry.target.id}`, undefined, { shallow: true }); // Updates URL
//           }
//         });
//       },
//       { threshold: 0.5 } // Adjust visibility trigger
//     );

//     sections.forEach((id) => {
//       const section = document.getElementById(id);
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return null; // No UI, only logic
// };

// export default ScrollSpy;
