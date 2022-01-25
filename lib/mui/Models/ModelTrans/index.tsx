import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [cookieState, setCookie] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCookie(true);
  };

  console.log("CookieState:", cookieState);

  return (
    <div>
      <Button onClick={handleOpen}>Aceitar Cookies</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Aceite os cookies para uma melhor experiência.
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Utilizamos cookies para melhorar a sua experiência em nosso
              aplicativo. Não utilizamos seus dados pessoais em nossos cookies.
            </Typography>
            <br />
            <Button
              variant="contained"
              onClick={handleClose}
              style={{ backgroundColor: "#249DD9" }}
            >
              Aceitar Cookies
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
