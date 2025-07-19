import Home from "./home/Home.svelte";
import About from "./about/About.svelte";
import Services from "./services/Services.svelte";
import Portfolio from "./portfolio/Portfolio.svelte";
import Testimonials from "./testimonials/Testimonials.svelte";
import FAQ from "./faq/FAQ.svelte";
import Contact from "./contact/Contact.svelte";
import Privacy from "./policy/Privacy.svelte";
import Terms from "./policy/Terms.svelte";

export default {
  "/": Home,
  "/about": About,
  "/services": Services,
  "/portfolio": Portfolio,
  "/testimonials": Testimonials,
  "/faq": FAQ,
  "/contact": Contact,
  "/policy/privacy": Privacy,
  "/policy/terms": Terms,
};
