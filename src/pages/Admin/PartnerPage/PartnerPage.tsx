import Table from "../../../components/Table";
import TableItem from "../../../components/TableItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Skeleton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  deletePartnerService,
} from "../../../services/partner.services";
import {
  confirmAlert,
  errorMessage,
  successDeleted,
} from "../../../utils/alerts";
import Pagination from "../../../components/Pagination";
import usePartner from "../../../hooks/usePartner";
import NavTitle from "../../../components/NavTitle";
import { useTranslation } from "react-i18next";

const PartnerPage = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const headers = [t('admin.socios.id') , t('admin.socios.imageTable'), t('admin.socios.actionsTable')];
  const {
    currentPage,
    totalPages,
    loading,
    partners,
    getAllPartners,
    handlerNextPage,
    handlerPreviousPage,
  } = usePartner();

  const deletePartnerById = async (id: number) => {
    confirmAlert().then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        try {
          deletePartnerService(id, token);
          getAllPartners();
          successDeleted();
        } catch (e) {
          errorMessage();
        }
      }
    });
  };

  return (
    <>
      <NavTitle className="my-4">
        <Typography color="text.primary"> { t('admin.navBar.socios') } </Typography>
      </NavTitle>
      <Button
        onClick={() => {
          navigate("/admin/socios/add", { replace: true });
        }}
      >
        { t('admin.socios.addImages') }
      </Button>
      <Table headers={headers}>
        <tbody>
          {loading && (
            <tr>
              <TableItem>
                <Skeleton variant="text" />
              </TableItem>
              <TableItem>
                <Skeleton variant="rectangular" />
              </TableItem>
              <TableItem>
                <Skeleton variant="rectangular" />
              </TableItem>
            </tr>
          )}
          {!loading &&
            partners?.length >= 1 &&
            partners?.map((partnerItem, index) => (
              <tr key={index}>
                <TableItem>
                  <p>{partnerItem.partner_id}</p>
                </TableItem>
                <TableItem>
                  <img src={partnerItem.partner_image} alt="galery" loading="lazy"/>
                </TableItem>
                <TableItem>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => deletePartnerById(partnerItem.partner_id)}
                  >
                    { t('admin.socios.delete') }
                  </Button>
                </TableItem>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        handlerNextPage={handlerNextPage}
        handlerPreviousPage={handlerPreviousPage}
      />
    </>
  );
};
export default PartnerPage;
