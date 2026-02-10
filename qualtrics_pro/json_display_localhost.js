const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // JSONファイルのパスを指定
    const jsonFilePath = path.join(__dirname, 'messages.json');
    
    // JSONファイルを読み込む
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            // ファイル読み込みエラーの場合
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            res.write(JSON.stringify({ error: 'ファイルが見つかりません' }));
            res.end();
            return;
        }
        
        // 正常にファイルを読み込めた場合
        res.writeHead(200, { 
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*' // CORS対応（必要に応じて）
        });
        res.write(data);
        res.end();
    });
});

const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port);
