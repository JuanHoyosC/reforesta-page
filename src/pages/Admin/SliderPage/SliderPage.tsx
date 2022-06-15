import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Skeleton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/Table";
import TableItem from "../../../components/TableItem";
import {
  confirmAlert,
  errorMessage,
  successDeleted,
} from "../../../utils/alerts";
import Pagination from "../../../components/Pagination";
import { deleteSliderService } from "../../../services/slider.services";
import useSlider from "../../../hooks/useSlider";
import NavTitle from "../../../components/NavTitle";
import { useTranslation } from "react-i18next";
const SliderPage = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const headers = [t('admin.slider.id'), t('admin.slider.imageTable'), t('admin.slider.titleTable'), t('admin.slider.descriptionTable'), t('admin.slider.actionsTable')];

  const {
    sliders,
    currentPage,
    getAllSliders,
    handlerNextPage,
    handlerPreviousPage,
    loading,
    totalPages,
  } = useSlider();

  const handlerDeleteSlider = async (id: number) => {
    confirmAlert().then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        try {
          deleteSliderService(id, token);
          successDeleted();
          getAllSliders();
        } catch (e) {
          errorMessage();
        }
      }
    });
  };

  return (
    <>
      <NavTitle className="my-4">
        <Typography color="text.primary">{ t('admin.navBar.slider') }</Typography>
      </NavTitle>
      <Button
        onClick={() => {
          navigate("/admin/slider/add", { replace: true });
        }}
      >
        { t('admin.slider.addSlider') }
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
              <TableItem>
                <Skeleton variant="rectangular" />
              </TableItem>
              <TableItem>
                <>
                  <Skeleton variant="rectangular" />
                  <Skeleton variant="rectangular" />
                </>
              </TableItem>
            </tr>
          )}
          {!loading &&
            sliders?.length >= 1 &&
            sliders?.map((sliderItem, index) => (
              <tr key={index}>
                <TableItem>
                  <p>{sliderItem.slider_id}</p>
                </TableItem>
                <TableItem>
                  <img
                    src={sliderItem.slider_image}
                    alt="galleria"
                    loading="lazy"
                  />
                </TableItem>
                <TableItem>
                  <p>{sliderItem.slider_title}</p>
                </TableItem>
                <TableItem>
                  <p>
                    {sliderItem.slider_description.substring(0, 30) + "..."}
                  </p>
                </TableItem>
                <TableItem>
                  <>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handlerDeleteSlider(sliderItem.slider_id)}
                    >
                      { t('admin.slider.delete') }
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => {
                        navigate("/admin/slider/" + sliderItem.slider_id, {
                          replace: true,
                        });
                      }}
                    >
                      { t('admin.slider.edit') }
                    </Button>
                  </>
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
export default SliderPage;
