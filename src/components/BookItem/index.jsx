import { Paper, Box, CardContent, CardMedia, Typography } from "@mui/material";
	

	const BookItem = ({ book }) => {
	  return (
	    <Paper elevation={3}
	        sx={{
	            display: 'flex',
	            marginBottom: '25px',
	            backgroundColor: 'rgb(109, 240, 44)'
	        }}
	    >
	      <CardMedia
	        sx={{
	            width: '30%',
	            height: '400px',
	            padding: '15px',
	            objectFit: 'contain'
	        }}
	        component="img"
	        image={book.volumeInfo?.imageLinks?.thumbnail} 
	      />
	      <CardContent
	      sx={{
	        width: '65%',
	      }}>
	        <Box>
	          <Typography variant="h4"
	            align="left"
	          >{book.volumeInfo.title}</Typography>
	          <Typography variant="h6"
	            align="left"
	          >{book.volumeInfo.authors}</Typography>
	          <Typography variant="subtitle2"
	            align="justify"
	          >{book.volumeInfo.description}</Typography>
	        </Box>
	      </CardContent>
	    </Paper>
	  );
	};
	

	export default BookItem;
