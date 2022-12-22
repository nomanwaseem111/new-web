import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import Checkbox from "@mui/material/Checkbox"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import Pagination from "@mui/material/Pagination"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"

import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Link, useNavigate } from "react-router-dom"
import { height } from "@mui/system"
const Product = () => {
  const [price, setPrice] = React.useState("")

  const handleChange = (event) => {
    setPrice(event.target.value)
  }
  const navigate = useNavigate()

  return (
    <Grid
      sx={{
        height: { md: "auto" },
      }}
    >
      <Container maxWidth="xl" sx={{ mb: { xs: "100px", md: "100px" } }}>
        <Stack
          direction={{ md: "row", xs: "column" }}
          sx={{
            width: { md: "auto", xs: "auto" },
            height: { md: "850px", xs: "auto" },
            mt: { md: "100px", xs: "50px" },
            // border:{md:"1px solid black",xs:"1px solid black"}
          }}
        >
          <Stack
            sx={{
              width: { md: "50%" },
              height: { md: "800px" },
            }}
          >
            <Box
              component="img"
              src="https://www.i4u.com.pk/upload_new/Iphone-13-128GB.webp"
              mt={{ md: "50px" }}
              mb={{ md: "30px", xs: "20px" }}
              ml={{ md: "75px" }}
              sx={{
                width: { md: "600px", xs: "325px" },
                height: { md: "auto", xs: "auto" },
              }}
            />
            <Stack direction={{ md: "row", xs: "row" }}>
              <Box
                component="img"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhUSEREPEBESEhURERIQEhESEBESGBQZGRgUGBgcITwlHB4rIRkYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHTQrISQxNTQ0Nj8xNDQ/MTQxNDE0NDE0MTQ0NDU/NDQ0NDQ0NDQ0NDQxMTQ0NDQxMTQxNDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQHAQj/xABHEAACAQICBAsECAQEBQUAAAABAgADEQQhBRIxQQYiNFFhcXJzgZGyEzKhswcjUmKSscHRJDNCwkNjgqIUg6PS8BVTw+Hx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREBAQABAwMDBAIDAQAAAAAAAAECAxExEiEyBEGRIlGBsTNhI3HwE//aAAwDAQACEQMRAD8A9WiIm6xERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBE58di1pUy7Am1gqr7zuTZVHSTIKqK9QE1azUwf8KiF1VHMWObflLY43ITWI0lQQ6r1aaN9kuNf8O2baOJpv7jo3ZYE+UqdPRWoeL7J133Qo/gQSD5CZnEanvI1DpdbrfocXH5TT/yn3Rut8Su0NI1FAIfXXdrcZT4/wD3O+jpdTk6lekcYfv+cpdPKJ3ScTXSrI/uMrdRzHhNkoEREBERAREQEREBERAREQEREBERAREQEREBERAREQERECI0rxqtJNyK9Uj72SIf9zzmaoA1jsX3yTYDLYOczox72xF7f4Kjo99r/pKRwo0iQwp6xVba7BWKl2dmyuM7Cx67ib4dsVat3/GUz7lnYe8oazgbsj+tptp4mmctbVJ/pcapPRzGeUU9OLTdNZ3C61iS+saYOWumsbgDK67CL756DgMRrrZ7FlOqw2gnnHQdvjJl3Ty7q+j6ebAGkT/VSOpfwGR8RON6dRTkUqjpHs38xkfITsCEDiNq/dbjIegru8JrSprXy1GU2db31Tusd4O4y0qHMuKUEa+tTO7XFhfocZfGSdDSDrbjay7tbjA+O2c5E5xgxe9MMh/yzqjxX3fhFkvKU9R0mh94FekcYfvO2nUVs1YN1GVc06qC5CVB0cR/+0/CZJilvmWRt2uNXybZ8ZS6cvButMSHpY1xtOsPvZ/GdC6Vp7HOp0nNfPdM7hlE7pCJirAgEEEEXBBuCOcGZSgREQEREBERAREQEREBERAREweoqi7MFHSbQMp9kdX0sg90Fj+Ffjn8JwVtJ1GvYhBv1crDpJl5p5UTtWqqC7sqjpIEjqmnsKps1QjpKVNXz1bSq6R4QYeiC1SuvUCG1vEmx85UNLfSNSsRQo6x+03u258xt6NWTccZzUbvaKFdHXWR0dftIwYeYm2fnJOHOOVtdAiDnVXQ27SkT1X6PeGoxqmlU4tdBfO12Hht3m9tx5rnP/Sd03pepasBu9kD4l2/YTy/6RMLUWpSqprBHUo5BtYqSV9TeQno3CN7V17ketpH6TwdOvQanUFwT4g84m8m+GyK8axItTsdXfnYX8TtPjPUuD1Riqa3vGhRL9vUA/ICVd+CFnF2NRAbhSwVT0MbXt0AS5aLwpQZm7MbsQLDZYADmAAA6pGOO1tRJslExa+09nZg2rrAn3SOj/zdN1ReMrc90bpBBK/7h8ZqS1wbC4uAcrjnE2Mch0Oh/wCokuNyqOvrmYaaFefQ0tsl07RbnnIybQfEbpvRphXGd+eIOcULfy2NM8wzQ9a7PK0gdN+0FyAVIF2UEkW+0p3r8RLIs04/D66ZAF1uydJtmvURlJQrHBbT9bD1QlTWfCu1mBuTSJ/rXo5x47dvqAPjKhgtHUyodQCrAMvPY7v0lk0aeIE+xxR2d37eEw1MZzEx2RETJJERAREQEREBEj8RpekrFNcM4yKqRxTzE7j0TQ+kHb3bKPu5nzlphlTdKu4AuxCjnJtOSrpFB7oLnyHmf2le0jpehSBatWRbbbsCeond4mUzS30k0FutBGqNzn3f28ry3Tjj5VG70WtpF22EKPu7fMyC0jpzD0gWq1kv2gxPRrE2v4zyLSnDbGVrjX9mv2Vz/PLyAlfd3c6zM7nZdiWPmZF1scfGIemaU+kektxh6Zc7mbZ8f2Mp+k+GGMrZGoUXcE3eO7wtIBkttIvzTNgGICIb22C7EmZXVzy9w1mdhrEsWIBJJJO7aZYKWFRfdUX5zmfMyOwGj2DB3GqBmAdpO7qkqxnf6TR2lyzne8NMcfuEzdwPrmhpXDsvFV3CsPuttUeIE1UKLu4SmjO7bFQEk9PV07BOyvoiphsZgTUK69SsOKh1ilnUWJ2E8bd5zT1cxuG95li2WNuO/wBnq3Cx7Yhe5X1vKXws0+9ELSp213uxJzCrewNt5JvbdkZdeFhH/ELcA/UrtF/63nnXCbCo1dajg5ooFidgYk+qc2HfGKdPbdy6F4QP7RadQqhcgI4GohY7Fddljs1hmMtsv+AxOsOY5gg7VYZEHxnmeP0auoDTazXyJO0HpGyXjRVYmzHbUp0qh7TIL/EE+MttZdqrF9pU0OHbeAtwfskDIyJ1uL/qT5iTnSobW1msdoBNj1ibgcvFPmJKY49O/wDZWaNM7zQjTMNNrEN6NM6ma9RnOpm8G6nqlbBghm0TShm1Yo1YFwiuu5KrqOgNZx65JaLrAuwH2QfIn95XcY5BfVufrFOXTTX9p38Fw/tHLZcTIXz94Smc+mpizxETnSREQEREBKjw30zVRP8Ah8MWV3F6lRfepodiqdzHn3DrBFsZrAk7ALnqEr2IwgYlmALMdY9Zl8JLe5Xn2ALIC9RilNBd2O4cw6ZE6Q4W4zFOcPgEcIMiUFyR9pmOQHS2XMBOrhvUariaejsPkzMA5Gz7xPQLG/YPPLVo7RdLDUlo0VsozZj77vvZjvP5bBNdrnltLtIiTdQqXAyu518ZiM/sqTUe3NrHJfC4lMxVHUqOl76jMl+exI/Se1YppEYfghhazPiayObtbUViiO21mNs942Eb5Gr6ebTpTs8pSmzGygsTsABJPUBJbDaAxDDjL7JT9s2P4dvnaekPhaVIFaNNKY36igE9Z2nxkViXl9P0c5yqZirdLQNNfeJqH8K+Qz+M36igWVVUcygCdVZpyOZ24aWGPEXkkYMZ36F0PUxDkLxKanj1GF1X7oH9TdHnaZ6C0M+Je1ylJLGq/NzKvOx+G07gb8qpTRadNQiILKo/M85O0nfK6mr09py6NHR6+94acFhKWHTUora/vu1i9Q87N+mwbhKpwpqE47AHmrbf9aS54TCl+M9wg83PMOjplW4eEDGaNCgALVNgNg+spzz9XU37NvU7Y6Vxn9LzwsW+JXuV9bytaT0cKlO39QzBG0dMs3Cw/wASvcr63kUsthb0xwThS/8A0mrezGyb2UOzW+6LWv4265ZtH0yCWI1b2AXbqIqhVXrsB43nf7JT0HnGUxXLmPXxW89kvLurca66Zm7WsP8AUg/3qfyBnNTccz/hv8RMn12yCkAXOe0mxH6nzk7IbKT5TerTiptNyvNLFXSGnRSM4ledNFpWwEM3KZzA5zehkUROlarKX1Ta7p8sTq4GuTWqXJJ9nvzPvCR2nXCh2OQDqT1ezE7uBIPtqgIIIp2INrg64yyymep4pi6RETnSREQEREDmx76tJz923nl+siKeJBtJHTY/h6mYHFGZ2e8JT6LVATfMarG4zHuGbac3lRVO4Jg1tLYmu2fs6bWvtV3ZQbf7/OXfEGUr6POV4/tAf9R5c8SZroeO/wDdTERjXktVT2dJE3qvG7Rzb4kyPwtPXroDsDa7dS5/mAPGdOlKmZmvNTEHjX2yGxDyQxbyJrtOjFdy1Wn3AYJ69RaVP3nOZPuoo9526B+w3zVUaXvgxoz2FH2ji1asAzX2om1U6DvPSQN0jPPpx3aaWHVlskMPh6dCmtKmLIg2m2s7b2bpM+Yaiaj2/pGbno5uszTiaklsJS9nTAPvNxn6zu8Nk87Uysm/vXpXbHHaNleoALCwAFgBsAnnnDV74zAd6fmU5c8TVlF4WNfGYHvf/kSc7n9R/Hfx+3pPC7lK9yvreRKGSvC7lK9yvzHkQs6sPGOHHhvUzXUGfXPqmKuwdcTtU0Rp2UHnApnTRaXoyrrqt0HMeM+K0zxY4oPMbeB//Jzhprj3jLKbV0K066DSPVp10DFiraDnN6mcaNOhDK0QHCsfVVusfKEmeB3KK3YPrEj9LbW7a/LE7+BY+tqd3/cJln41MXKIicySIiAiIgRnCHklXsD1CUbBVWDWBNtV8t3uHdLxwj5JW7A9Szz/AAL3fYQLOAbjOyG+XiJvpcVFQv0ecrx/bHzHlvxh2yofR5yvH9sfMeWvHGa6Hj8k4NDJxqlTmUIPE3PpHnOPSNTMyR0curQJ+27N4Cy/2mQ2PfMzXDlaIjEtIusZ34kyOqmdEWd3BrRor4ga4vTpfWVL7GseKvifgGl4xVXaZwcGsJ7LCqxFnrfWtz6pHEH4c+tjNmJecmrl1ZbfZ6Pp8enHf7mETXqop2A6zdS5/nYeMlsXUkboIXao/MqqPEkn0ibsW85NXvls1veuPE1JTOEjXxeC74etJaMQ8qWnWvi8H3o+Ysp09t2Hqf47/wB7vVOFnKl7hfmPIpRJThaf4pe4X5jyKUzo0/GOCcM7T5U93xn0GY1jkOuT7pvDWs6KZnOs2oZdErsq5026r+RnArTv/obsN+UjVM00+Kply3oZ2Ujl4ThQzrU8UyclWamdKGciGdCGVojtJ2uQRrA1aakXIuGCqdnXJDgWgFRwAFApgAAAAcYZADZI7SW3/nUPUklOB4+tqdgeoTHPxqYt0RE5kkREBERAi+EfJK3YHqWefYFDr+FY+a5T0LhDySr2B6hKDhiNY2IyVweg6hm+lxUVA/R7yvH9sfMeWjHmVb6PuVY/tj5jyzaQO2X0PH5Jw7wNWhTH3A34uN+sr2ObMyyY0WRRzIo8lAlYxpzM6MFkTiDNGCwvtayUv/ccK3OE2sfBQT4TdXkpwOw96z1D/h07DodzYH8IfzmuV6cbV8MerKRaMW43ZAZADYANgkLinkji3kJinnJI9Sdol9At9W5/zLeSj95ji3mng7UvTqrvFQN5rb+2Y419sxyx3yqsqPxDysaXa+LwnfD1rJ3EPK7pJr4rCd8vrWTnjth8MPUZfRXrfC8/xS9wvzHkQpktww5UvcL8x5DqZbT8I4pW5TMaxztzCEM1k7+eTJ3RlWSzbTmoTZTlyO5fcbst+RkWJJE2pt2T8RI0S2n7oybac6mOQnNSE3Oc+qWyVbUM3oZzIZ0LK0cWPW5O+1Sm1r2vqhWt8JK8ER9Y/YHqEi8YRdgSw1qlNLrbWGuFW4v1yV4Irao4F8kG0lj7w3nMzHPxqYtcRE5kkREBERAjeEHJavZHqEoNGwIsq3ZKpLW4x1UWwvzcZvOX/T3JqvZHqEoKe8vd1/ypzfS4RVe+j/lWP7Y+Y8smkd8rf0f8qx/bHzHlj0jvmmh4/JOEtpOVbGy1aS3yr40bZ0YLoevLLwTp6uHd99SqR1qii3xLSt1xLboVNXB0hvIdj4u1vhaTrX6W2hN8mGMeQWKeS2NeQWKeZYx3ZXs7eDeK1az0zsqIQO2nGHw1p16QOZlVasyMHQ2ZGDKeYg3EshxS1qYqJvydd6PvU/8AmyLh9W7GZd0RiHkHjj/FYTvl9aycxCSDxw/isJ3y+tZXWm2F/H7Y693xr1zhjype4X5jyHWS/DLlS9wvzHkODM9PwjmZsd3nPkxn0S8V3ZCbac1CR1fSbioVQLZTYki+sd/hukr4Y3K7RM6QxSU6RLm2sQAALk53M5hODSeMpv7MvrggXKKLqbHI35p20KiuAym4O+aYzaK5zbLZ10BF42L1z4se6rck6FnPTm9JWjix5z/52H9SSZ4J/wA1+wPUJCY4ZnblUoubbbKVY/ASa4In6x+wPUJjn41MWuIicySIiAiIgR+nOTVOyPUJRVTO+XFSoBznWUXy/wBI85e9OcnqdkeoSiKACbA3enUYnWJHFVbZHIHjnZzCbaXCKrP0fcqx/bHzHlk0gNsrf0e8qx/bHzHlox42zXR8fknCRxJuinnRT5rK3jl2yxUG1qCH7gX8PF/SQePXbN8FkFXEt2Dyw1Hul+IvKrXWWjDN/DUu7UeWUnV4jo9P5VGY1pB4lpM44yExJlcY6sqjq5mnDYypSbWpm18mU5qw5iJsrTkeayOTKpldMUnHHVkbflrr4EZ/CRePro+Kwns21rVlvxStuOvOJykTTS5Th++T1rMfUT/Hfx+2eWds2r2rhkf4pe4X5jyGWTPDPlS9wvzHkMsw0/GMqyE+ifBPomgzWV/UPtHH+Y3qMsCyM0lT1GapuZbjtbLfkfGWkb6OUlu6Jxb6zm2wcUeEnNCULJrXPGOzdllfrkDQS5ln0edWmBvFwPHO8uyyu93dLnPqyn1ZgJsWQzbUm9JpWbklalw4s8Z+tPRJfggfrH7A9QkJjTx2619EmOBp+sqdgeoTHPxqYuERE5kkREBERA4NOcmqdkeoShMeMvdV/wAqcvmneTVOz/cJQiM758WnVF8rHWC/9nxm2lwiq79HfK8f2x8x5ascu2Vb6OuV4/tj5jy3Y1ZroePymcPuiHvRZd6OfJhcfHWnBj0m7Q1TVqsh2VFy7S5j4a02aQp7ZtjymK1iFk9o174VPul1P4yR8CJD4lJ36Ef6upT+ywcdTCx9I85pnN8W2jdsnNjZCYmT2NWQeJWRi6skZVE5WE7KqzmdZeObKOciaFH8Vh++T1rOsrOe38Thu+T1iY+p/jv4Y5zs9m4Z8qXuF+Y8hlkzwz5UvcL8x5DLOfTn0xnWYn0T4J9E2kGSCatJUBUUUybWNwRnZpuBtn5T4qy2MTujqOiitiG1ufK36ztpLnfYANVR0bzOhzYW3n8pgJO3dG7JZtSalm5JFQ2rNqTUs2rK1KL0geO3WvokxwKP1lTux6hITSR47da+iTPAg/W1O7HqExz8amLpEROZJERAREQI/TvJqvZ/uEom5uy/pMRN9LioqvfRxyrH9ofMeXDGRE00PH5TETR/n0+8T1CS+kd8RNZyRXsTMtC/zG7tvUsRNr4tNPyjPGb5C4mIlcXfkjqs5XiJo58mszkflOG71PWsRMPU/wAd/H7YZ8PZuGXKl7hfmPIZYiY6XjGN5ZiZCImsB90zSIl/YYNtPXPoiIQzWblnyJWjcs2rPsStShdKfzG619IkzwH/AJtTux6hPsTHPxqYukRE5kkRED//2Q=="
                height={{ md: "195px", xs: "100px" }}
                width={{ md: "200px", xs: "80px" }}
                ml={{ md: "0px", xs: "0px" }}

              />
              <Box
                component="img"
                ml={{ md: "10px", xs: "5px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekCxWprTMaejwBRmWbEs2kXyYhRHVrW0u9w&usqp=CAU"
                height={{ md: "195px", xs: "100px" }}
                width={{ md: "200px", xs: "80px" }}
              />
              <Box
                component="img"
                ml={{ md: "10px", xs: "5px" }}
                src="data:image/jpeg;base64,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"
                height={{ md: "195px", xs: "100px" }}
                width={{ md: "200px", xs: "80px" }}
              />

              <Box
                component="img"
                ml={{ md: "10px", xs: "5px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGY2vxHM2gdCtTllDL4TV5eCMBDU3rLiXTw&usqp=CAU"
                height={{ md: "195px", xs: "100px" }}
                width={{ md: "200px", xs: "80px" }}
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: { md: "700px" },
              height: { md: "850px", xs: "auto" },
              // border:{md:"1px solid red",xs:"1px solid red"},
              mt: { xs: "50px", md: "0px" },
              mb: { xs: "100px", md: "0px" },
              ml: { md: "70px" },
            }}
          >
            <Box height={{ md: "680px" }} mt={{ md: "50px" }}>
              <Typography
                variant="h3"
                pl={{ md: "30px" }}
                sx={{ fontSize: { xs: "28px", md: "50px" } }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Apple iPhone 13 128GB
              </Typography>
              <Rating
                name="size-large"
                defaultValue={2}
                size="large"
                sx={{ mt: { md: "20px", xs: "20px" }, ml: { md: "30px",xs:"0px" } }}
              />
              <Typography
                variant="h3"
                mt="20px"
                mb="10px"
                pl={{ md: "30px" }}
                sx={{ fontSize: { xs: "28px", md: "50px" } }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                $129.00
              </Typography>
              <hr />
              <Typography
                variant="h5"
                mt="15px"
                pl={{ md: "30px" }}
                sx={{ fontSize: { xs: "18px", md: "24px" } }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Product Description{" "}
              </Typography>
              <Typography
                variant="h6"
                mt="10px"
                mb="10px"
                pl={{ md: "30px" }}
                sx={{ fontSize: { xs: "14px", md: "22px" } }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Apple iphone 13 128GB is available on affordable installment in
                Karachi.
              </Typography>
              <hr />
              <Typography
                variant="h5"
                mt="15px"
                pl={{ md: "30px" }}
                sx={{ fontSize: { xs: "16px", md: "24px" } }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Product Features
              </Typography>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding sx={{ pl: { md: "30px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{ fontSize: { md: "normal", xs: "10px" } }}
                        fontFamily={{md:"Roboto",xs:"Roboto"}}

                        primary="ROM 128GB"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ pl: { md: "30px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Rear Camera 12.0 MP+12.0 MP" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ pl: { md: "30px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Front Camera 12.0 MP" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ pl: { md: "30px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="A15 Bionic chip" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ pl: { md: "30px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Single Sim & eSim" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Stack
                direction="row"
                justifyContent="space-between"
                padding="10px"
                marginLeft={{ md: "30px", xs: "0px" }}
              >
                <Typography variant="h6" width="100px" padding="10px"                 fontFamily={{md:"Roboto",xs:"Roboto"}}
>
                  Quantity
                </Typography>
                <FormControl
                  sx={{ width: { md: "80px" }, height: {} }}
                  ml={{ md: "20px" }}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    onChange={handleChange}
                    sx={{ height: { md: "50px", xs: "40px" } }}
                    label="0"
                  >
                    <MenuItem
                      value={10}
                      textAlign="center"
                      sx={{ fontSize: "22px" }}
                    >
                      1
                    </MenuItem>
                    <MenuItem value={20} sx={{ fontSize: "22px" }}>
                      2
                    </MenuItem>
                    <MenuItem value={30} sx={{ fontSize: "22px" }}>
                      3
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Button
                variant="contained"
                onClick={() => navigate("/cartsection")}
                sx={{    "&:hover": {
                backgroundColor: "#fff",
                color: "orange",
                border:"2px solid orange",
                fontWeight:"bold"
              },
                  backgroundColor: { md: "orange", xs: "orange" },
                  marginLeft: { md: "50px", xs: "10px" },
                  width: { md: "220px", xs: "120px" },
                  height: { md: "50px", xs: "40px" },
                  fontSize: { md: "18px", xs: "12px" },
                  mt: { md: "20px" },
                  mb: { xs: "10px", md: "0px" },
                  border: { md: "none", xs: "none" },
                  borderRadius: { md: "0px", xs: "0px" },
                  fontFamily:{md:"Roboto",xs:"Roboto"}

                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default Product