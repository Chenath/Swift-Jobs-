import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UserProfile = () => {
  // Sample user data - replace with actual user data from your state/context/API
  const userData = {
    fullName: "Mark Gutierrez",
    email: "mail@example.com",
    gender: "Male",
    dateOfBirth: "28 May 1992",
    phoneNumber: "623-466-7667",
    homeAddress: "2750 Cambridge Drive Phoenix",
    country: "Belarus",
    zipCode: "7667",
    education: {
      college: "Public affairs specialist",
      highSchool: "Public affairs specialist",
      higherSecondary: "Public affairs specialist"
    },
    skills: ["PHOTOSHOP", "ILLUSTRATOR", "AFTER EFFECT", "PREMIER PRO", "COREL DRAW", "FRAMES"]
  };

  // Profile image
  const profileImage = { uri: "https://example.com/profile-image.jpg" }; // Replace with actual image path
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient 
        colors={["#623AA2", "#F97794"]} 
        style={styles.header}
      >
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PROFILE</Text>
        <View style={styles.emptySpace} />
      </LinearGradient>

      <ScrollView style={styles.scrollView}>
        {/* Profile Banner and Info Card */}
        <View style={styles.profileBannerContainer}>
          <Image 
            source={require('../../assets/20943599.jpg')} // Replace with your actual banner image
            style={styles.profileBanner}
            resizeMode="cover"
          />
          
          <View style={styles.profileInfoCard}>
            <View style={styles.profileImageContainer}>
              <Image 
                source={require('../../assets/20943599.jpg')} // Replace with your actual profile image
                style={styles.profileImage}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{userData.fullName}</Text>
              <Text style={styles.profileEmail}>{userData.email}</Text>
            </View>
          </View>
        </View>

        {/* Basic Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BASIC INFORMATION</Text>
          <View style={styles.sectionContent}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Full Name</Text>
              <Text style={styles.infoValue}>{userData.fullName}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Gender</Text>
              <Text style={styles.infoValue}>{userData.gender}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Date Of Birth</Text>
              <Text style={styles.infoValue}>{userData.dateOfBirth}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Phone Number</Text>
              <Text style={styles.infoValue}>{userData.phoneNumber}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Email Address</Text>
              <Text style={styles.infoValue}>{userData.email}</Text>
            </View>
          </View>
        </View>

        {/* Location Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LOCATION</Text>
          <View style={styles.sectionContent}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Home Address</Text>
              <Text style={styles.infoValue}>{userData.homeAddress}</Text>
            </View>
            
            <View style={styles.horizontalInfoContainer}>
              <View style={[styles.infoItem, styles.horizontalInfoItem]}>
                <Text style={styles.infoLabel}>Country</Text>
                <Text style={styles.infoValue}>{userData.country}</Text>
              </View>
              
              <View style={[styles.infoItem, styles.horizontalInfoItem]}>
                <Text style={styles.infoLabel}>Zip Code</Text>
                <Text style={styles.infoValue}>{userData.zipCode}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <View style={styles.sectionContent}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>College</Text>
              <Text style={styles.infoValue}>{userData.education.college}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>High School Degree</Text>
              <Text style={styles.infoValue}>{userData.education.highSchool}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Higher Secondary Education</Text>
              <Text style={styles.infoValue}>{userData.education.higherSecondary}</Text>
            </View>
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.sectionContent}>
            <View style={styles.skillsContainer}>
              {userData.skills.map((skill, index) => (
                <LinearGradient 
                  key={index}
                  colors={["#623AA2", "#F97794"]} 
                  style={styles.skillItem}
                >
                  <Text style={styles.skillText}>{skill}</Text>
                </LinearGradient>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptySpace: {
    width: 24, // Matches the width of the menu button to center the title
  },
  scrollView: {
    flex: 1,
  },
  profileBannerContainer: {
    position: 'relative',
    marginBottom: 60, // Space for the card that overlaps
  },
  profileBanner: {
    width: '100%',
    height: 200,
  },
  profileInfoCard: {
    position: 'absolute',
    bottom: -50,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImageContainer: {
    marginRight: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
    marginTop: 3,
  },
  section: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sectionContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  infoItem: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  horizontalInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalInfoItem: {
    width: '48%',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  skillItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default UserProfile;