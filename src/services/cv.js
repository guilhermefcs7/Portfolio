import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const getAll = async () => {
  let list = [];

  const cvFolder = ref(storage, "cv");
  const cvList = await listAll(cvFolder);

  for (let i in cvList.items) {
    let cvUrl = await getDownloadURL(cvList.items[i]);

    list.push({
      name: cvList.items[i].name,
      url: cvUrl,
    });
  }

  return list;
};
