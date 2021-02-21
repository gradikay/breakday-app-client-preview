// This file is exported to src/index.js
// **** NOTE **** FOR SECURITY REASONS -- Put variable in a .env (file) --
// ------ Communication with Backend / API

// Development Configuration from AWS
const dev = {
    s3: {
        REGION: "us-east-2", 
        ATTACHEMENTS_BUCKET_NAME: "breakday-app-services-dev-attachmentsbucket-m4de3wgw6f0j"
    },
    apiGateway: {
        REGION: "us-east-2",
        SERVICE_ENDPOINT: "https://uizt60uge3.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_Pmin3IpSE",
        USER_POOL_CLIENT_ID: "6reb2jqav4qsgst0o4ibeeq5k8",
        IDENTITY_POOL_ID: "us-east-2:ef101b5f-72b0-440c-a14e-74de8d24858d"
    }
};

// Production Configuration from AWS
const prod = {
    s3: {
        REGION: "...",
        ATTACHEMENTS_BUCKET_NAME: "..."
    },
    apiGateway: {
        REGION: "...",
        SERVICE_ENDPOINT: "..."
    },
    cognito: {
        REGION: "...",
        USER_POOL_ID: "...",
        USER_POOL_CLIENT_ID: "...",
        IDENTITY_POOL_ID: "..."
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 1000000,
    ...config
};