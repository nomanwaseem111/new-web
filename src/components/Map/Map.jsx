import React from 'react'
import Stack from '@mui/material/Stack';

const Map = () => {
  return (
    <div>
          <Stack width={{ md: "85%", xs: "90%" }} height={{ md: "800px", xs: "400px" }} margin="auto" mt={{ md: "100px", xs: "80px" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0094933385203!2d67.05912091409715!3d24.86352535126005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3395a5ca43%3A0xbb199abfe2db29e!2sTech%20Matter%20(Pvt)%20Ltd.!5e0!3m2!1sen!2s!4v1670027099671!5m2!1sen!2s"  border="none" allowfullscreen="" loading="lazy" height="800px" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Stack>
    </div>
  )
}

export default Map