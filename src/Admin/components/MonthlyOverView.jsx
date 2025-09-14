import { TrendingUp } from '@mui/icons-material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
const salesData = [
  {
    stats: '245k',
    title: "Sales",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
  },
  {
    stats: '245k',
    title: "Customer",
    color: "success",
    icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />
  },
  {
    stats: '245k',
    title: "Product",
    color: "warning",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
  },
  {
    stats: '88k',
    title: "Revenue",
    color: "info",
    icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />
  }
]
const MonthlyOverView = () => {
  return (
    <div>
      <Card sx={{ bgcolor: "#1E272E", color: "white", height: "100%" }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Monthly Overview 📊
          </Typography>
          <Typography  >
            <Box component="span" fontWeight="bold">Total 48.5% growth 🤯</Box> this month
          </Typography>

          <Grid container spacing={2} sx={{ display: "flex" }}>
            {salesData.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: "#2F363F",
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <Avatar sx={{ bgcolor: `${item.color}.main`, mr: 2 }}>
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="h6">{item.stats}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

        </CardContent>
      </Card>
    </div>
  )
}

export default MonthlyOverView

