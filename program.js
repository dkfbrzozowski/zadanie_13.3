process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var info = ' Commands: \n\
    /node - node version\n\
    /lang - OS language\n\
    /help - this info\n\
    /exit - exit program\n';

    console.log(info);
    if( input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit' : 
                process.stdout.write('Quiting app!\n');
                process.exit();
                break;
            case '/lang' :
                process.stdout.write('Environment language: ' + process.env.lang + '\n');    
                break;
            case '/node' :
                process.stdout.write('Node version: ' + process.versions.node + '\n');
                break; 
            case '/help' :
                process.stdout.write('Usage: \n' + info);
                break;    
            default:
                process.stderr.write('Wrong instruction!\n\n' + info);
                                      
        }

    }
});