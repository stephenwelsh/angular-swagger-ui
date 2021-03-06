/*
 * Orange angular-swagger-ui - v0.3.1
 *
 * (C) 2015 Orange, all right reserved
 * MIT Licensed
 */
'use strict';

angular
	.module('swaggerUi')
	.config(["swaggerTranslatorProvider", function(swaggerTranslatorProvider) {

		swaggerTranslatorProvider
			.addTranslations('fr', {
				infoContactCreatedBy: 'Créé par {{name}}',
				infoContactUrl: 'Plus d\'informations',
				infoContactEmail: 'Contacter le développeur',
				infoLicense: 'Licence: ',
				infoBaseUrl: 'URL',
				infoApiVersion: 'VERSION API',
				infoHost: 'HOTE',
				endPointToggleOperations: 'Ouvrir/Cacher',
				endPointListOperations: 'Lister les opérations',
				endPointExpandOperations: 'Ouvrir les opérations',
				operationDeprected: 'Attention: Obsolète',
				operationImplementationNotes: 'Notes d\'implementation',
				parameters: 'Paramètres',
				parameterName: 'Paramètre',
				parameterValue: 'Valeur',
				parameterDescription: 'Description',
				parameterType: 'Type',
				parameterDataType: 'Type de données',
				parameterOr: ' ou ',
				parameterRequired: '(requis)',
				parameterModel: 'Modèle',
				parameterSchema: 'Schéma',
				parameterContentType: 'Type de paramètre',
				parameterDefault: '{{default}} (défaut)',
				parameterSetValue: 'Cliquer pour définir comme valeur de Paramètre',
				responseClass: 'Réponse (statut {{status}})',
				responseModel: 'Modèle',
				responseSchema: 'Schéma',
				responseContentType: 'Type de réponse',
				responses: 'Réponses',
				responseCode: 'Code HTTP',
				responseReason: 'Raison',
				responseHide: 'Cacher la réponse',
				modelOptional: 'optionnel',
				modelOr: ' ou ',
				explorerUrl: 'URL de la requète',
				explorerBody: 'Réponse',
				explorerCode: 'Code de la réponse',
				explorerHeaders: 'Entêtes de la réponse',
				explorerLoading: 'En cours ...',
				explorerTryIt: 'Essayer !',
				errorNoParserFound: 'Aucun parseur trouvé pour la spécification Swagger au format {{type}} et version {{version}}',
				errorParseFailed: 'Impossible de parser la spécification Swagger : {{message}}',
				errorJsonParse: 'Impossible de parser le JSON',
				errorNoYamlParser: 'Aucun parseur YAML trouvé, veuillez vérifier que la librairie js-yaml est bien chargée'
			});

	}]);