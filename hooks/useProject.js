import { useRouter } from "next/router";
import { PROJECTS_DATA } from "../data/projects";

function useProject() {
  const router = useRouter();
  const { slug } = router.query;
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export default useProject;