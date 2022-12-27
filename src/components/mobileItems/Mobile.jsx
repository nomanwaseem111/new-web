import React from 'react'
import Rating from "@mui/material/Rating"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"


import { useNavigate } from "react-router-dom"


const Mobile = () => {

  const navigate = useNavigate()


  return (
    <div>
      <Stack
        direction={{ md: "row", xs: "column" }}
        height="auto"
        sx={{
          width: { md: "100%", xs: "100%" },
          mt: { md: "30px", xs: "20px" },
        }}
        px="20px"
        justifyContent="space-around"
        flexWrap="wrap"
        margin="auto"
      >
        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px", xs: '0px' }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "30px" }}
        // border={{md:"1px solid black",xs:"1px solid black"}}
        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-c25y-pakistan-priceoye-ste24-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}}
            onClick={() => navigate("/product")}
          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
                fontFamily: { md: "Roboto", xs: "Roboto" }

              }}
            >
              Rockerz 450 DC edition
            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}


        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-x3-pakistan-priceoye-0muqr-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"} }}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Rockerz 450 DC edition            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-race-pro-pakistan-priceoye-fqm5e-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"} }}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Rockerz 450 DC edition            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-q5-pakistan-priceoye-33ds0-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"} }}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Rockerz 450 DC edition            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-gt-neo-pakistan-priceoye-8x8oy-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"} }}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Rockerz 450 DC edition            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-9-4g-pakistan-priceoye-9e84o-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"} }}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Lorem ipsum fashion female top
            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-9-pro-plus-pakistan-priceoye-o7rz8-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"} }}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Lorem ipsum fashion female top
            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-gt-neo-4-pakistan-priceoye-fg3dc-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"} }}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Lorem ipsum fashion female top
            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-narzo-50-pakistan-priceoye-fjofh-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"} }}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Lorem ipsum fashion female top
            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-x7-pro-pakistan-priceoye-zeehy-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" } ,transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Lorem ipsum fashion female top
            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-c20a-pakistan-priceoye-ir868-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" } ,transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"}}}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Lorem ipsum fashion female top
            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>

        <Box
          width={{ md: "auto", xs: "100%" }}
          ml={{ md: "5px" }}
          height={{ md: "500px", xs: "400px" }}
          textAlign={{ md: "center", xs: "center" }}
          mt={{ xs: "40px" }}

        >
          <Box
            component="img"
            src="https://images.priceoye.pk/realme-c15s-pakistan-priceoye-2f9re-270x270.webp"
            sx={{ width: { md: "350px", xs: "290px" },transition:{md:"all ease 0.3s"}, "&:hover":{transform:"scale(1.1)"} }}
            onClick={() => navigate("/product")}

          />
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18" },
                mt: { md: "22px", xs: "5px" },
              }}
            >
              Lorem ipsum fashion female top
            </Typography>
            <Rating
              name="size-large"
              defaultValue={2}
              size="large"
              sx={{ mt: "10px" }}
            />

            <Typography
              component="p"
              sx={{
                fontSize: { md: "22px", xs: "18px" },
                mt: { md: "8px", xs: "15px" },
              }}
            >
              €35.6
            </Typography>
          </Box>
        </Box>




      </Stack>

    </div>
  )
}

export default Mobile
