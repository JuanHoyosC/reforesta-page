import { Box, Button, Modal, Skeleton, Typography } from "@mui/material";
import { useEffect, useState, FC } from "react";
import { IGallery } from "../../../App.interfaces";
import Table from "../../../components/Table";
import {
  deleteImageService,
  getAllImageService,
} from "../../../services/gallery.services";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "../../../components/Pagination";
import TableItem from "../../../components/TableItem";
import { useNavigate } from "react-router-dom";
import {
  confirmAlert,
  errorMessage,
  successDeleted,
} from "../../../utils/alerts";
import NavTitle from "../../../components/NavTitle";
interface GalleryPageProps {
  page?: string;
}
const Gallery: FC<GalleryPageProps> = ({ page }) => {
  const headers = ["id", "imagen", "acciones"];
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [images, setImages] = useState<IGallery[] | []>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getAllImages = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await getAllImageService(currentPage, token);
      setTotalPages(parseInt(res?.data?.total_page));
      setImages(res?.data?.data);
      setLoading(false);
    } catch (e) {
      setTotalPages(0);
    }
  };

  const deleteImage = async (id: number) => {
    confirmAlert().then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        try {
          deleteImageService(id, token);
          getAllImages();
          successDeleted();
        } catch (e) {
          errorMessage();
        }
      }
    });
  };

  const handlerNextPage = () => {
    if (currentPage < totalPages) {
      setLoading(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlerPreviousPage = () => {
    if (currentPage <= totalPages && currentPage > 1) {
      setLoading(true);
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    getAllImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (page === "front") {
    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute inset-auto mt-52 md:mt-20 md:ml-96">
            <img
              src={currentImage}
              alt="plantas"
              className="w-full md:w-6/6 md:h-96"
              loading="lazy"
            />
          </Box>
        </Modal>
        {!loading && totalPages >= 1 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 mb-10 hover:cursor-pointer">
              {images?.map((img: IGallery, index: number) => {
                return (
                  <div
                    key={index}
                    className="md:w-50 md:h-50 w-full"
                    style={{
                      backgroundImage: "url('" + img.gallery_image + "')",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "100vh",
                    }}
                    onClick={() => {
                      setCurrentImage(img.gallery_image);
                      setTimeout(() => {
                        handleOpen();
                      }, 100);
                    }}
                  ></div>
                );
              })}
            </div>
            <Pagination
              loading={loading}
              currentPage={currentPage}
              totalPages={totalPages}
              handlerNextPage={handlerNextPage}
              handlerPreviousPage={handlerPreviousPage}
            />
          </>
        )}
      </>
    );
  }

  return (
    <>
      <NavTitle className="my-4">
        <Typography color="text.primary">Galeria de imagenes</Typography>
      </NavTitle>
      <Button
        onClick={() => {
          navigate("/admin/galeria-imagenes/add", { replace: true });
        }}
      >
        Añadir imagenes
      </Button>
      {!loading && totalPages >= 1 && (
        <>
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
                images?.length > 0 &&
                images?.map((image, index) => (
                  <tr key={index}>
                    <TableItem>
                      <p>{image.gallery_id}</p>
                    </TableItem>
                    <TableItem>
                      <img src={image.gallery_image} alt="galleria" />
                    </TableItem>
                    <TableItem>
                      <>
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          onClick={() => deleteImage(image.gallery_id)}
                        >
                          Borrar
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
      )}
    </>
  );
};

export default Gallery;
