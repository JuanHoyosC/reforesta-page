import { useEffect, useState } from "react";
import { IDashboard } from "../../App.interfaces";
import DashbaordCard from "../../components/DashboardCard";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import TableItem from "../../components/TableItem";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import request from "../../API";
import useProjectFetch from "../../hooks/useProject";
import usePartner from "../../hooks/usePartner";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavTitle from "../../components/NavTitle";
const Dashboard = () => {
  let navigate = useNavigate();

  const project_headers = ["titulo", "imagen", "accion"];
  const parnerts_headers = ["id","imagen"];
  const { loading: projects_laoding, projects } = useProjectFetch(4);
  const {loading , partners} = usePartner();

  const [data, setData] = useState<IDashboard | any>();
  const [expandedProjects, setExpandedProjects] = useState<string | false>(
    "panel1"
  );
  const [expandedGallery, setExpandedGallery] = useState<string | false>(
    "panel1"
  );

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedProjects(isExpanded ? panel : false);
    };

    const handleChangeAccordionGallery =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedGallery(isExpanded ? panel : false);
    };

  useEffect(() => {
    request.get("/dashboard").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className="mt-5">
        <NavTitle />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-2 gap-4 justify-center">
              <DashbaordCard
                title="Total Sliders"
                quantity={data?.sliders}
                icon={
                  <BoltOutlinedIcon className="scale-150 h-20 w-32 text-gray-300" />
                }
              />
              <DashbaordCard
                title="Total Imagenes en Galleria"
                quantity={data?.gallery}
                icon={
                  <BoltOutlinedIcon className="scale-150 h-20 w-32 text-gray-300" />
                }
              />
              <DashbaordCard
                title="Total Proyectos"
                quantity={data?.projects}
                icon={
                  <BoltOutlinedIcon className="scale-150 h-20 w-32 text-gray-300" />
                }
              />
              <DashbaordCard
                title="Total de Socios"
                quantity={data?.partners}
                icon={
                  <BoltOutlinedIcon className="scale-150 h-20 w-32 text-gray-300" />
                }
              />

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mt-5">
              <Accordion
                expanded={expandedProjects === "panel1"}
                onChange={handleChangeAccordion("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id={`panel1bh-header`}
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Ultimos Proyectos
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Table headers={project_headers}>
                    <tbody>
                      {projects_laoding && (
                        <tr>
                          <TableItem>
                            <Skeleton variant="text" />
                          </TableItem>
                          <TableItem>
                            <Skeleton variant="text" />
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
                      {!projects_laoding &&
                        projects?.length >= 1 &&
                        projects?.map((project, index) => (
                          <tr key={index}>
                            <TableItem>
                              <p>{project.project_title}</p>
                            </TableItem>
                            <TableItem>
                              <img
                                src={project.project_image}
                                alt={project.project_title}
                                loading="lazy"
                              />
                            </TableItem>
                            <TableItem>
                              <Button
                                variant="outlined"
                                onClick={() => {
                                  navigate(
                                    "/blog/" + project.project_slug,
                                    {
                                      replace: true,
                                    }
                                  );
                                }}
                              >
                                Ver
                              </Button>
                            </TableItem>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="mt-5">
              <Accordion
                expanded={expandedGallery === "panel1"}
                onChange={handleChangeAccordionGallery("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id={`panel1bh-header`}
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Ultimas Imagenes de la Galleria
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Table headers={parnerts_headers}>
                    <tbody>
                      {loading && (
                        <tr>
                          <TableItem>
                            <Skeleton variant="text" />
                          </TableItem>
                          <TableItem>
                            <Skeleton variant="text" />
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
                        partners?.length >= 1 &&
                        partners?.map((partner, index) => (
                          <tr key={index}>
                            <TableItem>
                              <p>{partner.partner_id}</p>
                            </TableItem>
                            <TableItem>
                              <img
                                src={partner.partner_image}
                                alt={"parnet"}
                                loading="lazy"
                              />
                            </TableItem>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
