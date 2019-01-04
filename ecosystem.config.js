module.exports = {
    apps: [{
        name: 'PetsyProxy',
        script: './server/index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-3-83-224-102.compute-1.amazonaws.com',
            key: '~/.ssh/PetsyInfoProxyKeys.pem',
            ref: 'origin/master',
            repo: 'https://github.com/mnutt346/Pet-Info-Proxy.git',
            path: '/home/ubuntu/Pet-Info-Proxy',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}