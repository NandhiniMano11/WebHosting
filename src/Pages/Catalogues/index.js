import React from "react";
import
{
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { indianrate } from "../../constants";
import "./styles.css";
import { HiCheckCircle } from "react-icons/hi";
const useStyles = makeStyles((theme) => ({
  card: {
    border: '1px solid #408de4',
    boxShadow: "0px 2px 3px rgba(34, 35, 58, 0.2)",
    "&:hover": {
      boxShadow: "0px 5px 10px #408de4"
    }
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 16
    }
  }
}));

const Servers = () =>
{
  const styles = useStyles();
  const history = useHistory();

  const handlebuy = (id) =>
  {
    history.push(`/Checkout`);
  };
  return (
    <Container>
      <Box mt={2}>
        <Box mb={2}>
          <Typography variant="h5" align='center'>
            Choose a Plan That's Right For You
          </Typography>
        </Box>
        <Grid container justify="center" spacing={3}>
          {indianrate.map((server, index) => (
            <Grid item >
              <Card
                className={styles.card}

              >
                <CardContent className={styles.cardContent}>
                  <Box
                    display="flex"
                    flex={1}
                    justifyContent={"left"}
                    alignItems="left"
                  >
                    <Box>
                      <Typography align="center" variant="h6">
                        {server.plan}
                      </Typography>
                      <Box mt={1} border={1}>
                        <Typography
                          variant="subtitle2"
                          align="center"
                          justifyContent={"center"}
                          color="textSecondary"
                          className="labelval"
                        >
                          SAVE 80% </Typography>
                        <Typography
                          variant="subtitle2"
                          align="center"
                          justifyContent={"center"}
                          color="textSecondary"
                          className="labelval"
                        >  3 Years at/₹{server.actualrate} </Typography>


                        <Typography
                          variant="h5"
                          align="center"
                        // color="textSecondary"
                        >
                          ₹{server.discountamt}
                        </Typography>
                      </Box>


                      <Box mt={1}>
                        <Typography
                          variant="subtitle2"
                          align="left"
                          justifyContent={"left"}
                          color="textSecondary"
                          className="benifitLabel"
                        >
                          Feature
                        </Typography>
                      </Box>
                      <Box>
                        {server.feature.map((data, index) => (
                          <Box display="flex" flex={1}>
                            <Box style={{ flex: 0.1 }}>
                              <HiCheckCircle size={15} color={"#5BC0C2"} />
                            </Box>
                            <Box style={{ flex: 0.9 }}>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                              >
                                {data.des}
                              </Typography>
                            </Box>
                            <Box></Box>
                          </Box>
                        ))}
                        <Box mt={1} style={{ width: "100%" }}>
                          <Button variant='contained' color='primary' onClick={() => handlebuy()}>Buy Now</Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Servers;
