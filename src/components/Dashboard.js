// src/components/Dashboard.js
import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Jan', downloads: 4000 },
  { name: 'Feb', downloads: 3000 },
  { name: 'Mar', downloads: 2000 },
  { name: 'Apr', downloads: 2780 },
  { name: 'May', downloads: 1890 },
  { name: 'Jun', downloads: 2390 },
  { name: 'Jul', downloads: 3490 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const recentUsers = [
  { name: 'Dip Hasan', status: 'Active', signup: '15th Aug, 2022', spent: '$25,147' },
  // Add more users here
];

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active User</Typography>
              <Typography variant="h4">35,049</Typography>
              <Typography variant="subtitle2" color="textSecondary">25% than last week</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Install</Typography>
              <Typography variant="h4">100K</Typography>
              <Typography variant="subtitle2" color="textSecondary">-13% than last week</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Subscription</Typography>
              <Typography variant="h4">15,672</Typography>
              <Typography variant="subtitle2" color="textSecondary">25% than last week</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Earnings</Typography>
              <Typography variant="h4">$88,364</Typography>
              <Typography variant="subtitle2" color="textSecondary">-13% than last week</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Book Downloads</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="downloads" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Analytics</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Recent Users</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Customer</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Sign Up</TableCell>
                      <TableCell>Total Spent</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.name}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.status}</TableCell>
                        <TableCell>{user.signup}</TableCell>
                        <TableCell>{user.spent}</TableCell>
                        <TableCell>
                          <button>Delete</button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
