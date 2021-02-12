﻿# Documentation

Welcome to the documentation section, the central place to look for documentation on Hawk

## Setup

Run all the following steps from PowerShell as Administrator

1. Ensure you are running PowerShell 5.0. Enter: **$PSVersionTable** (Don't use any higher version now, at the time of this writing)
2. **Install-Module -Name Hawk**
3. If you do not have the Exchange Online ShowerShell V2 Module installed: **Install-Module -Name ExchangeOnlineManagement**
    - **Set-ExecutionPolicy RemoteSigned**
    - **Import-Module ExchangeOnlineManagement**

## Implementation

### Logins

1. **Connect-AzureAD**
2. **Connect-MsolService**
3. **Connect-ExchangeOnline**

### Run Hawk to do Initial Investigation

1. **Start-HawkTenantInvestigation**
    - Accept Disclaimer
    - Set Output Directory
    - First Day of Search Window (1-90 days)
    - Last Day of Search Window (1-90 days)

### Log File Breakdown

## Hunting

## References
