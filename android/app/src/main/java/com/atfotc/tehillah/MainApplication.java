package com.atfotc.tehillah;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.rnfs.RNFSPackage;
import com.rnziparchive.RNZipArchivePackage;
import com.eko.RNBackgroundDownloaderPackage;
import com.bugsnag.BugsnagReactNative;
import com.github.yamill.orientation.OrientationPackage;
import com.corbt.keepawake.KCKeepAwakePackage;
import com.horcrux.svg.SvgPackage;
import com.johnsonsu.rnsoundplayer.RNSoundPlayerPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          BugsnagReactNative.getPackage(),
          new MainReactPackage(),
          new RNFSPackage(),
          new RNZipArchivePackage(),
          new RNBackgroundDownloaderPackage(),
          new OrientationPackage(),
          new KCKeepAwakePackage(),
          new SvgPackage(),
          new RNSoundPlayerPackage(),
          new SplashScreenReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
