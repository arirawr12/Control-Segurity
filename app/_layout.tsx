const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100, // espacio para header
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },

  appLogo: {
    width: 35,
    height: 35,
    marginRight: 10,
  },

  appName: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  title: {
    color: '#FF0000',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#FF0000',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});