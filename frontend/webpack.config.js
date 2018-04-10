const Webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // Arquivo que será o ponto de entrada
    entry: './src/index.jsx',
    // Onde será gerada a sáída do arquivo JS
    output: {
        // Local onde será gerado o arquivo
        path: __dirname + '/public',
        // Nome do arquivo JS gerado. Por padrão se utiliza bundle.js
        filename: './bundle.js'
    },
    // Informações sobre o servidor web do webpack
    devServer: {
        // Porta de execução do servidor
        port: 8085,
        // Qual arquivo base que terá os arquivos que serã carregados
        contentBase: './public'

    },
    // Resolução para os tipos de extenção, para que o webpack as reconheça
    resolve: {
        extensions: ['','.js','.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    // Plugin para tratamento do parser nos CSS
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
    module: {
        loaders: [
            // loader para conversão de arquivos JSX
            {
                // Expressão que verifica se os arquvivos carregados são JSX
                test: /\.jsx?$/,
                // Loader que será utilizado no careegamento
                loader: 'babel-loader',
                // Arquvivos que não serão testados
                exclude: '/node_modules/',
                // O que será interpretado
                query: {
                    // Array de presets que serão aplicados para tradução de scripts
                    presets: ['es2015','react'],
                    plugins: ['babel-plugin-transform-object-rest-spread']
                }
            },
            // loader para conversão de arquivos CSS
            {
                test: /\.css?$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            // Loader para tratamento das fontes: bootstrap, awesome, ...
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file'
            }
        ]
    }
}