module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var branch = 'master';
    var val = 'https://github.com/moulikcipherx/serverless-testng/blob/' + branch + '/';
    let results = [];
    if(req.method === 'POST'){
        let aArr = req.body.head_commit.added;
        aArr.forEach( ele => {
            if( ele.includes('.png')){
                bool = true;
                val = val + ele;
                results.push(val);
            }
        });
        /**
         * Images url are stored in the results array
         * Use any database you like and store all the urls in the database 
         */     
        context.res = {
            body: 'Successfully Uploaded the Png Image'
        }
    }
    else {
        context.res = {
                    status: 400,
                    body: "Please pass a name on the query string or in the request body"
                };
    }
};