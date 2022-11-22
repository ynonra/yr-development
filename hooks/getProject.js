import { PROJECTS_DATA } from "../data/projects";

function getProject(slug) {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export default getProject;