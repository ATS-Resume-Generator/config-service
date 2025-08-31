module.exports = {
  development: {
    db: {
      uri: process.env.DEV_DB_URI || 'mongodb://localhost:27017/dev_db',
    },
    featureFlags: {
      enableNewFeature: true,
    },
    config: {
      someSetting: 'devValue',
    },
  },
  staging: {
    db: {
      uri: process.env.STAGING_DB_URI || 'mongodb://localhost:27017/staging_db',
    },
    featureFlags: {
      enableNewFeature: false,
    },
    config: {
      someSetting: 'stagingValue',
    },
  },
  production: {
    db: {
      uri: process.env.PROD_DB_URI || 'mongodb://localhost:27017/prod_db',
    },
    featureFlags: {
      enableNewFeature: false,
    },
    config: {
      someSetting: 'prodValue',
    },
  },
};