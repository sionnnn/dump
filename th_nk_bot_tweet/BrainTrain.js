var BrainJSClassifier = require('natural-brain/lib/index');
classifier = new BrainJSClassifier();

//pull in from wit.ai?

classifier.addDocument('tomorrow we should see a film', 'whatsOn');
classifier.addDocument('what films are on at the cinema?', 'whatsOn');
classifier.addDocument('whats on at gateshead cinema?', 'whatsOn');
classifier.addDocument('films showing at gateshead cinema', 'whatsOn');
classifier.addDocument('have you seen any good films lately?', 'recommend');
classifier.addDocument('where is the cinema?', 'location');
classifier.addDocument('whats on at the cinema?', 'whatsOn');
classifier.addDocument('nearest cinema?', 'location');
classifier.addDocument('hey whats showing at gateshead cinema?', 'whatsOn');
classifier.addDocument('where is the gateshead cinema?', 'location');
classifier.addDocument('can you tell me directions to gateshead cinema?', 'location');
classifier.addDocument('hi what action movies on at leeds cinema?', 'whatsOn');
classifier.addDocument('when is the film ted on?', 'whatsOn');
classifier.addDocument('what is the best film?', 'recommend');
classifier.addDocument('what good films are on?', 'recommend');
classifier.addDocument('what should i go and see at the cinema?', 'recommend');
classifier.addDocument('wheres the nearest cinema to me?', 'location');
classifier.addDocument('wheres my nearest cinema?', 'location');
classifier.addDocument('anyone seen any good films lately?', 'recommend');
classifier.addDocument('whats on at cinema', 'whatsOn');
classifier.addDocument('what good on at the cinema?', 'recommend');
classifier.addDocument('any recommendations for films tonight?', 'recommend');
classifier.addDocument('cant decide what to see at the cinema?', 'recommend');
classifier.addDocument('im lost! cant find the cinema!', 'location');
classifier.addDocument('i wonder if theres anything good on at the cinema tonight?', 'recommend');
classifier.addDocument('i cant find the cinema to save my life!', 'location');
classifier.addDocument('anyone seen any good films lately?', 'recommend');
//classifier.addDocument('latest releases? #cinema', 'whatsOn');


classifier.train();
/**
console.log("****************************");
console.log(classifier.classify('whats on at cinema'));
console.log(classifier.classify('anyone seen any good films lately?'));
console.log(classifier.classify('wheres my nearest cinema?'));
console.log("****************************");
*/

var BrainTrain = module.exports = function(){
	this.getCategory = function(str){
		return classifier.classify(str);
	}
	this.classify = function(str,cat){
		console.log("BRAIN retrain "+str+ " "+cat)
		classifier.addDocument(str, cat);
		classifier.retrain();
	}
}

//check if correct if no give options - classify previous message