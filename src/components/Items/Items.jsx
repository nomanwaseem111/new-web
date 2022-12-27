import React from 'react'
import Rating from "@mui/material/Rating"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import img1 from '../../assets/accessories/acc1.webp'
import img2 from '../../assets/accessories/acc2.webp'
import img3 from '../../assets/accessories/acc3.webp'
import img4 from '../../assets/accessories/acc4.webp'
import img5 from '../../assets/accessories/acc5.webp'
import img6 from '../../assets/accessories/acc6.webp'

import { useNavigate } from "react-router-dom"


const Items = () => {

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
            src={img1}
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src={img2}
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src={img3}
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src={img4}
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src={img5}
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src={img6}
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_35ad08a3-ed67-4b87-b7a6-e4d8ae22847d_600x.png?v=1646391225"
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img3_600x.png?v=1616562632"
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-410-red_300x.png?v=1613457276"
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_e669ad28-caff-4fb7-b68a-a345f9e08649_300x.png?v=1658995805"
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/88dfba7c-19fd-4aef-a278-41c0d2d35366_300x.png?v=1624882639"
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c9b304e6-1451-4ac7-95a1-5aa1cf51df05_45954dbd-6b69-4ae5-bed5-27cb1780d391_300x.png?v=1629538797"
            sx={{ width: { md: "350px", xs: "290px" }, marginRight: { md: "0px", xs: "50px" } }}
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

export default Items
