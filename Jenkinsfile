pipeline {
    agent any
    
    tools {
        nodejs 'node' 
    }

    stages {
        stage('Clone Repo') {
            steps {
                script {
                    git branch: 'master',
                    url: 'https://github.com/Khatiti/gallery'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                    //echo 'testing'
                }
            }
        }
        stage('Build') {
            steps {
                script {
		            //sh 'npm run build'
                    echo 'building'
                }
            }
        }
        
        stage('Deploy to Render') {
            steps {
                script {
                    def response = httpRequest(
                        url: "https://api.render.com/v1/services/srv-crobic88fa8c738pst5g/deploys",
                        httpMode: 'POST',
                        contentType: 'APPLICATION_JSON',
                        requestBody: '{}',
                        customHeaders: [[name: 'Authorization', value: "Bearer rnd_Wegu0rLG8EO6taTL2U5N6IX5mbgd"]],
                        validResponseCodes: '200:299'
                    )
                }
            }
        }

    }
    post {
        success {
            slackSend channel: '#ramsey_ip1', message: "BuildID: [${env.BUILD_NUMBER}], Deployment was successful!"
        }
        failure {
            script {
                // Send an email when the build fails
                emailext(
                    subject: "Jenkins Job Failed",
                    body: """<p>The Jenkins job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' has failed.</p>""",
                    recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
                    to: 'ramseykhatiti@gmail.com',
                    attachLog: true
                )
            }
        }
    }
}