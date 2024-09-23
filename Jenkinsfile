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
                    echo 'testing'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    echo 'building'
                }
            }
        }
        stage('Run App') {
            steps {
                script {
                    sh 'nohup npm start &'
                }
            }
        }
    }
    post {
        success {
            echo 'Success.'
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