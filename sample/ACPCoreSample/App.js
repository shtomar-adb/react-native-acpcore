/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, NativeModules} from 'react-native';

const ACPCore = NativeModules.ACPCore;
const ACPLifecycle = NativeModules.ACPLifecycle;
const ACPIdentity = NativeModules.ACPIdentity;
const ACPSignal = NativeModules.ACPSignal;

type Props = {};
export default class App extends Component<Props> {
  render() {
    ACPCore.setLogLevel("ACP_LOG_LEVEL_VERBOSE");
    ACPLifecycle.registerExtension();
    ACPIdentity.registerExtension();
    ACPSignal.registerExtension();
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ marginTop: 75 }}>
        <Text style={styles.welcome}>ACPCore Test App</Text>
        <Button title="ACPCore::extensionVersion()" onPress={this.coreExtensionVersion}/>
        <Button title="ACPIdentity::extensionVersion()" onPress={this.identityExtensionVersion}/>
        <Button title="ACPLifecycle::extensionVersion()" onPress={this.lifecycleExtensionVersion}/>
        <Button title="ACPSignal::extensionVersion()" onPress={this.signalExtensionVersion}/>

        <Button title="ACPCore::setPrivacyStatus(OptIn)" onPress={this.setPrivacyOptIn}/>
        <Button title="ACPCore::setPrivacyStatus(OptOut)" onPress={this.setPrivacyOptOut}/>
        <Button title="ACPCore::getPrivacyStatus()" onPress={this.getPrivacyStatus}/>
        <Button title="ACPCore::getSdkIdentities()" onPress={this.getSdkIdentities}/>
        <Button title="ACPCore::setAdvertisingIdentifier(adID)" onPress={this.setAdvertisingIdentifier}/>
        <Button title="ACPCore::lifecycleStart()" onPress={this.lifecycleStart}/>
        <Button title="ACPCore::lifecyclePause()" onPress={this.lifecyclePause}/>
        <Button title="ACPCore::collectPii()" onPress={this.collectPii}/>
        <Button title="ACPCore::setAppGroup()" onPress={this.setAppGroup}/>
        <Button title="ACPCore::downloadRules()" onPress={this.downloadRules}/>

        <Button title="ACPIdentity::syncIdentifiers()" onPress={this.syncIdentifiers}/>
        <Button title="ACPIdentity::syncIdentifiersWithAuthState()" onPress={this.syncIdentifiersWithAuthState}/>
        <Button title="ACPIdentity::syncIdentifier()" onPress={this.syncIdentifier}/>
        <Button title="ACPIdentity::appendVisitorInfoForURL()" onPress={this.appendVisitorInfoForURL}/>
        <Button title="ACPIdentity::getIdentifiers()" onPress={this.getIdentifiers}/>
        <Button title="ACPIdentity::getExperienceCloudId()" onPress={this.getExperienceCloudId}/>
        </ScrollView>
      </View>
    );
  }

  async coreExtensionVersion() {
    try {
      var version = await ACPCore.extensionVersion();
      console.log("ACPCore version: " + version);
    } catch (e) {
      console.log("failed to get version");
    }
  }

  async identityExtensionVersion() {
    try {
      var version = await ACPIdentity.extensionVersion();
      console.log("ACPIdentity version: " + version);
    } catch (e) {
      console.log("failed to get version");
    }
  }

  async lifecycleExtensionVersion() {
    try {
      var version = await ACPLifecycle.extensionVersion();
      console.log("ACPLifecycle version: " + version);
    } catch (e) {
      console.log("failed to get version");
    }
  }

  async signalExtensionVersion() {
    try {
      var version = await ACPSignal.extensionVersion();
      console.log("ACPSignal version: " + version);
    } catch (e) {
      console.log("failed to get version");
    }
  }

  async setPrivacyOptIn() {
    ACPCore.setPrivacyStatus("ACP_PRIVACY_STATUS_OPT_IN");
  }

  async setPrivacyOptOut() {
    ACPCore.setPrivacyStatus("ACP_PRIVACY_STATUS_OPT_OUT");
  }

  async getPrivacyStatus() {
    try {
      var status = await ACPCore.getPrivacyStatus();
      console.log("Privacy status " + status);
    } catch (e) {
      console.log("failed to get status");
    }
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  }
});