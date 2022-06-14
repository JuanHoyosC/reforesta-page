import { useEffect, useState } from "react";
import { IContact } from "../App.interfaces";
import { getAllContactsService } from "../services/contact.services";
import usePaginationHook from "./usePaginationHook";
const useContact = () => {
  const { loading, setLoading } = usePaginationHook();
  const [contacts, setContacts] = useState<IContact[] | []>([]);

  const getAllContacts = async () => {
    await getAllContactsService()
      .then((res) => {
        setContacts(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    contacts,
    getAllContacts,
    loading
  };
};

export default useContact;
