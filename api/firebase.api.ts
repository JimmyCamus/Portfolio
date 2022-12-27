import { collection, getDocs } from "firebase/firestore";
import { firestoreReference } from "../lib/config/firebase.config";
import { Project } from "../lib/types/project.type";

export const getProjects = async () => {
  const docRef = collection(firestoreReference, "projects");
  const documentSnapshot = await getDocs(docRef);
  const projects: Project[] = documentSnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    description: doc.data().description,
    type: doc.data().type,
    stack: doc.data().stack,
    link: doc.data().link,
    image: doc.data().image,
    repos: doc.data().repos,
  }));
  return projects;
};
