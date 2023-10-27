/*
* 404 and Global Error Handlers
*/

// Error handler for handling non-existent routes
const handle404Error = (req, res, next) => {
    // Create new error to handle non-existent routes
    const err = new Error('err');
    err.status = 404;
    err.message = 'Oops, page not found. Looks like that route does not exist.';
    next(err);
}; 

// Global error handler
const handleGlobalError = (err, req, res, next) => {
    if (err.status === 404) {
        res.render('error', {err})
    } else {
        err.message = "Sorry! There is a problem connecting to the server."
        // Set error status and send error message to the page 
        res.status(err.status || 500);
        res.render('page-not-found', {err});
    }
};
  
module.exports = {handle404Error, handleGlobalError}; 