<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.products.content?.map((item) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='left'>
                  <Avatar src={item.imageUrl}></Avatar>
                </TableCell>

                <TableCell align='left' scope="row">
                  {item.title}
                </TableCell>
                

                {/* <TableCell align="left">{item.title}</TableCell> */}
                <TableCell align="right">{item.category.name}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
                 <TableCell align="right">{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>