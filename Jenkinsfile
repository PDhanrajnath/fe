import groovy.transform.Field

podTemplate(label: 'bc15', containers: [
	containerTemplate(name: 'bc15-docker', image: 'docker:19.03', command: 'cat', ttyEnabled: true)],
	volumes: [hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')]
) {

  node('bc15'){
  	environment {
		docker_image=""
		DOCKERHUB_CREDENTIALS= credentials('Dhanrajnath_Docker')
		// MY_KUBECONFIG = credentials('config-file')
	}
	

// 		stage('Checkout Source') {
// 			steps {
//         git 'https://github.com/PDhanrajnath/fe.git'
//       }
//     }
    
    stage('Build Docker'){
	git 'https://github.com/PDhanrajnath/fe.git'
	container('bc15-docker'){

		sh 'docker build -t dhanrajnath/fe_jenkins .'
		sh 'docker images'

	}
			
     }
		
	stage('Push Docker'){
			
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
// 		   stage ('BC15-GC') {
        	
// 		    build job: 'BC15-GC', parameters: [string(name: 'master', value: env.BRANCH_NAME)]
	
//         }
    
		
		
		}
	
// 	post{
// 	    always{
// 	        container('bc15-docker'){
// 	         sh 'docker logout'
// 	    }
// 	    }
// 	}
    

  


}

// pipeline{
// 	agent{		
// 		kubernetes {    
// yaml '''
// apiVersion: v1
// kind: Pod
// spec:
//   containers:
//   - name: bc15-docker
//     image: docker:19.03
//     command:
//     - cat
//     tty: true
//     volumeMounts:
//     - name: dockersock
//       mountPath: /var/run/docker.sock
//   volumes:
//     - name: dockersock
//       hostPath:
//         path: /var/run/docker.sock
// '''
// 		}
// 	}
			
// 	environment {
// 		docker_image=""
// 		DOCKERHUB_CREDENTIALS= credentials('Dhanrajnath_Docker')
// 		// MY_KUBECONFIG = credentials('config-file')
// 	}
// 	stages{
// 		stage('Checkout Source') {
// 			steps {
//         git 'https://github.com/PDhanrajnath/fe.git'
//       }
//     }
    
// 		stage('Build Docker'){
// 			steps{
// 				container('bc15-docker'){
// 					sh 'docker build -t dhanrajnath/fe_jenkins .'
// 					sh 'docker images'
// 				}
// 			}
// 		}
		
// 		stage('Push Docker'){
// 			steps{
// 				container('bc15-docker'){
// 					sh 'ls'
//     withCredentials([usernamePassword(credentialsId: 'Dhanrajnath_Docker', usernameVariable: 'username', passwordVariable: 'password')]) {
// 						sh 'echo $PASSWORD'
//                          sh 'docker login -u $username -p $password'
// 						echo USERNAME
// 						echo "username is $USERNAME"
// 						sh 'docker push dhanrajnath/fe_jenkins'
//     }           
// 				}
// 			}
// 		}
// 		             stage ('BC15-GC') {
//         	steps {
		
// 		    build job: 'BC15-GC', parameters: [string(name: 'master', value: env.BRANCH_NAME)]
		
//         }
//     }
// 	}
	
// 	post{
// 	    always{
// 	        container('bc15-docker'){
// 	         sh 'docker logout'
// 	    }}
// 	}
       
// }
