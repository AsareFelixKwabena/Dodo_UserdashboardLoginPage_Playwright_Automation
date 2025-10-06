pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/AsareFelixKwabena/Dodo_UserdashboardLoginPage_Playwright_Automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                echo 'Running Playwright tests...'
                bat 'npx playwright test --reporter=list'
            }
        }

        stage('Archive Test Results') {
            steps {
                echo 'Archiving test results...'
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            deleteDir()
        }
    }
}

