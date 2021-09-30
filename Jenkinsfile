pipeline{
	agent{		
		kubernetes {    
yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: bc15-docker
    image: docker:19.03
    command:
    - cat
    tty: true
    volumeMounts:
    - name: dockersock
      mountPath: /var/run/docker.sock
  volumes:
    - name: dockersock
      hostPath:
        path: /var/run/docker.sock
'''
		}
	}
			
	environment {
		docker_image=""
		DOCKERHUB_CREDENTIALS= credentials('Dhanrajnath_Docker')
		// MY_KUBECONFIG = credentials('config-file')
	}
	stages{
		stage('Checkout Source') {
			steps {
        git 'https://github.com/PDhanrajnath/fe.git'
      }
    }
    
		stage('Build Docker'){
			steps{
				container('bc15-docker'){
					sh 'docker build -t dhanrajnath/fe_jenkins .'
					sh 'docker images'
				}
			}
		}
		
		stage('Push Docker'){
			steps{
				container('bc15-docker'){
					sh 'ls'
    withCredentials([usernamePassword(credentialsId: 'Dhanrajnath_Docker', usernameVariable: 'username', passwordVariable: 'password')]) {
						sh 'echo $PASSWORD'
                         sh 'docker login -u $username -p $password'
						echo USERNAME
						echo "username is $USERNAME"
						sh 'docker push dhanrajnath/fe_jenkins'
    }           
				}
			}
		}	
	}    
	post{
		always{
        container('docker'){
        sh 'docker logout'
    }
   }
	}
}